function formatTime(time) {
  // Try to parse an integer number of seconds
  const totalSeconds = parseInt(time);
  if (isNaN(totalSeconds)) {
    console.log("formatTime arg is nan")
    return "N/A";
  }

  // Break into days / hours / minutes / seconds
  let seconds = totalSeconds;
  const days = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  // Build the string, always including necessary zero‑values
  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
}

function formatUnixTimestamp(time) {
  if (!time || isNaN(time) || time === 0) {
    return "N/A";
  }

  return new Date(time * 1000).toLocaleString();
}

module.exports = {
  formatTime,
  formatUnixTimestamp
}
