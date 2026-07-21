const sessionIdToUserMap = new Map();

function setUser(sessionId, user) {
    sessionIdToUserMap.set(sessionId, user);
}

function getUser(sessionId) {
    return sessionIdToUserMap.get(sessionId);
}

function removeUser(sessionId) {
    sessionIdToUserMap.delete(sessionId);

}

module.exports = {
    setUser,
    getUser,
    removeUser,
};