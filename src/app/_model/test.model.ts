export class TestModel{

    public id: number;
    public testType: string;
    public testCategory: string;
    public testSubCategory: string;
    public testSubSubCategory: string;
    public estimate: string;
    public otherinfo: string;


    constructor(id: number, testType: string, testCategory?: string, testSubCategory?: string, testSubSubCategory?: string, estimate?: string, otherinfo?: string) {
        this.id = id;
        this.testType = testType;
        this.testCategory = testCategory;
        this.testSubCategory = testSubCategory;
        this.testSubSubCategory = testSubSubCategory;
        this.estimate = estimate;
        this.otherinfo = otherinfo;
    }
}
