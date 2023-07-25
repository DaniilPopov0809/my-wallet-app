const shortAddress = (str) => {
    return `${str.slice(0, 5)}...${str.slice(-4)}`;
}

export default shortAddress;