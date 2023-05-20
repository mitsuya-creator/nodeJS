class Mhs {
    constructor(name, birth) {
        this.name = name;
        this.birth = birth;
    }
    age() {
        let diffY = new Date().getFullYear() - new Date(this.birth).getFullYear();
        let diffM = new Date().getMonth() - new Date(this.birth).getMonth();
        if (diffM < 0) {
            diffY = diffY - 1;
            diffM = 12 - (new Date(this.birth).getMonth() - new Date().getMonth());
        }
        let diffD = new Date().getDate() - new Date(this.birth).getDate();
        if (diffD < 0) { diffD = new Date(this.birth).getDate() - new Date().getDate(); }
        return `${diffY} Years ${diffM} Months ${diffD} Days`;
    }
}


export default Mhs;