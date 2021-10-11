import { Circle } from "../testSrc/circleAndRect.js";
import { expect } from "chai";

describe('circleAndRect', function() {
  it('Circle 클래스를 생성하여 area함수를 호출 한다', function() {
    let radius = 5;
    let circle = new Circle(radius);
    expect(circle.area()).equal(25);
  });
});
