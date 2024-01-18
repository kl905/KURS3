const Cfp = ({Ass}) => {
    let gr=''
    switch (Ass){
        case 0:
            gr = 'A-1'
            break;
        case 1:
            gr = 'A-2'
            break;
        case 2:
            gr = 'A-3'
            break;
    }
    return (gr)
};

export default Cfp;