process.stdin.setEncoding("utf-8");

const isChannelWorking = (channelRange) => {
    const nonWorkingChannels = parseInt(channelRange / 2);
    const workingChannels = channelRange - nonWorkingChannels;
    console.log(workingChannels);
};

process.stdin.on("data", (input) => {
    const channelRange = Number(input.trim());
    
    isChannelWorking(channelRange);
});