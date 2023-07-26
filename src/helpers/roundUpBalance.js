const roundUpBalance = (str) => {
    const toNumber = parseFloat(str);
    return (Math.floor(toNumber *1000) / 1000).toString();
}

export default roundUpBalance;