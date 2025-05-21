
describe("SumTests, Sum", function () {
    it("is not null", function () {
        let mySum = new Sum()
        expect(mySum).not.toBeNull();
    });

    it("is able to add value to running total", function () {
        let mySum = new Sum()
        mySum.add(20);
        //Default constructor initializes with total=null
        //This adds to the total, and then verifies that the total is no longer null.
        expect(mySum.total).not.toBeNull();
    });

    it("is able to getValue of running total", function () {
        let mySum = new Sum()
        mySum.add(5);
        //Checks if the value returned by getValue is the same as the value stored in the Object
        expect(mySum.getValue()).toEqual(mySum.total);
    });

    it("is able to reset the running total", function () {
        let mySum = new Sum(10)
        mySum.reset();
        //Constructs Sum with a total of 10, then resets the total
        expect(mySum.total).toEqual(0);
    });
  });

