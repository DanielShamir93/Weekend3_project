const yesOrNo = bool => {
    return bool ? 'Yes' : 'No';
}

const tester = () => {
    console.log(yesOrNo(true), '// Should return Yes');
    console.log(yesOrNo(false), '// Should return No');
}

tester();