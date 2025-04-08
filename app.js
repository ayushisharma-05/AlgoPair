// WebRTC Configuration
const configuration = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' }
    ]
};

// DOM Elements
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const startButton = document.getElementById('startButton');
const callButton = document.getElementById('callButton');
const hangupButton = document.getElementById('hangupButton');
const output = document.getElementById('output');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const dsaSheet = document.getElementById('dsaSheet');
const tabs = document.querySelectorAll('.tab');
const localUserName = document.getElementById('localUserName');
const remoteUserName = document.getElementById('remoteUserName');
const joinRoomContainer = document.getElementById('joinRoomContainer');
const roomIdInput = document.getElementById('roomId');
const userNameInput = document.getElementById('userName');
const joinButton = document.getElementById('joinButton');
const currentRoomSpan = document.getElementById('currentRoom');

// WebRTC Variables
let localStream;
let peerConnection;
let socket;
let currentRoom = null;
let userName = 'User' + Math.floor(Math.random() * 1000);

// Initialize Socket.IO connection
function initializeSocket() {
    socket = io();
    
    socket.on('connect', () => {
        console.log('Connected to server');
    });

    socket.on('room-joined', (room) => {
        currentRoom = room;
        currentRoomSpan.textContent = room;
        joinRoomContainer.style.display = 'none';
        appendMessage({
            sender: 'System',
            text: `Joined room: ${room}`,
            time: new Date().toLocaleTimeString()
        });
    });

    socket.on('user-joined', (name) => {
        remoteUserName.textContent = name;
        appendMessage({
            sender: 'System',
            text: `${name} joined the room`,
            time: new Date().toLocaleTimeString()
        });
    });

    socket.on('user-left', (name) => {
        appendMessage({
            sender: 'System',
            text: `${name} left the room`,
            time: new Date().toLocaleTimeString()
        });
        remoteUserName.textContent = 'Partner';
        if (peerConnection) {
            hangUp();
        }
    });

    socket.on('code-update', (code) => {
        editor.setValue(code);
    });

    socket.on('chat-message', (message) => {
        appendMessage(message);
    });

    socket.on('offer', async (offer) => {
        try {
            await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);
            socket.emit('answer', { room: currentRoom, answer });
        } catch (error) {
            console.error('Error handling offer:', error);
        }
    });

    socket.on('answer', async (answer) => {
        try {
            await peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
        } catch (error) {
            console.error('Error handling answer:', error);
        }
    });

    socket.on('ice-candidate', async (candidate) => {
        try {
            await peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
        } catch (error) {
            console.error('Error adding ICE candidate:', error);
        }
    });
}

// Room Joining
joinButton.addEventListener('click', () => {
    const roomId = roomIdInput.value.trim();
    const name = userNameInput.value.trim();
    
    if (roomId && name) {
        userName = name;
        localUserName.textContent = name;
        socket.emit('join-room', { room: roomId, name });
    } else {
        alert('Please enter both room ID and your name');
    }
});

// Initialize CodeMirror
const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: 'javascript',
    theme: 'dracula',
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 4,
    lineWrapping: true,
    extraKeys: {
        'Ctrl-Enter': executeCode,
        'Cmd-Enter': executeCode
    }
});

editor.on('change', () => {
    if (currentRoom) {
        socket.emit('code-update', { room: currentRoom, code: editor.getValue() });
    }
});

// Chat Functions
function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `
        <div class="sender">${message.sender}</div>
        <div class="text">${message.text}</div>
        <div class="time">${message.time}</div>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendChatMessage() {
    const text = chatInput.value.trim();
    if (text && currentRoom) {
        const message = {
            sender: userName,
            text: text,
            time: new Date().toLocaleTimeString()
        };
        socket.emit('chat-message', { room: currentRoom, message });
        appendMessage(message);
        chatInput.value = '';
    }
}

// DSA Sheet Functions
const dsaProblems = {
    twoSum: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
    reverseString: `function reverseString(str) {
    return str.split('').reverse().join('');
}`,
    palindrome: `function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}`,
    fibonacci: `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}`,
    binarySearch: `function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
    bubbleSort: `function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}`,
    mergeSort: `function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}`,
    quickSort: `function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[0];
    const left = [];
    const right = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}`
};

// WebRTC Functions
async function startVideo() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
        startButton.disabled = true;
        callButton.disabled = false;
    } catch (error) {
        console.error('Error accessing media devices:', error);
    }
}

async function startCall() {
    try {
        peerConnection = new RTCPeerConnection(configuration);

        localStream.getTracks().forEach(track => {
            peerConnection.addTrack(track, localStream);
        });

        peerConnection.ontrack = (event) => {
            remoteVideo.srcObject = event.streams[0];
        };

        peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit('ice-candidate', { room: currentRoom, candidate: event.candidate });
            }
        };

        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        socket.emit('offer', { room: currentRoom, offer });

        callButton.disabled = true;
        hangupButton.disabled = false;
    } catch (error) {
        console.error('Error starting call:', error);
    }
}

function hangUp() {
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
    }
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localVideo.srcObject = null;
    }
    remoteVideo.srcObject = null;
    startButton.disabled = false;
    callButton.disabled = true;
    hangupButton.disabled = true;
}

// Event Listeners
startButton.addEventListener('click', startVideo);
callButton.addEventListener('click', startCall);
hangupButton.addEventListener('click', hangUp);
sendMessage.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChatMessage();
});

// Tab switching
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        if (tab.dataset.tab === 'dsa') {
            dsaSheet.style.display = 'block';
        } else {
            dsaSheet.style.display = 'none';
        }
    });
});

// DSA problem selection
dsaSheet.querySelectorAll('li').forEach(problem => {
    problem.addEventListener('click', () => {
        const problemCode = dsaProblems[problem.dataset.problem];
        editor.setValue(problemCode);
    });
});

// Code Execution
function executeCode() {
    try {
        const code = editor.getValue();
        const result = eval(code);
        output.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
    } catch (error) {
        output.innerHTML = `<pre style="color: #ff5555">Error: ${error.message}</pre>`;
    }
}

// Initialize
initializeSocket();
callButton.disabled = true;
hangupButton.disabled = true;
localUserName.textContent = userName; 