import p5 from "p5";

export class Line {
  p: p5;
  x: number;
  y: number;
  dx: number;
  dy: number;
  points: Array<{ x: number; y: number }>;
  trailLength: number;
  alpha: number;

  constructor(p: p5) {
    this.p = p;
    this.points = [];
    this.trailLength = 200;
    this.alpha = 255;
    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.dy = 0;
    this.reset();
  }

  reset() {
    const startFromLeft = this.p.random() > 0.5;
    const angle = this.p.random(-20, 20);

    if (startFromLeft) {
      this.x = -20;
      this.y = this.p.random(this.p.height * 0.2, this.p.height * 0.8);
      this.dx = this.p.cos(this.p.radians(angle)) * 2;
      this.dy = this.p.sin(this.p.radians(angle)) * 2;
    } else {
      this.x = this.p.width + 20;
      this.y = this.p.random(this.p.height * 0.2, this.p.height * 0.8);
      this.dx = -this.p.cos(this.p.radians(angle)) * 2;
      this.dy = this.p.sin(this.p.radians(angle)) * 2;
    }
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    this.points.unshift({ x: this.x, y: this.y });
    if (this.points.length > this.trailLength) {
      this.points.pop();
    }

    if (this.isOffscreen()) {
      this.points = [];
      this.reset();
    }
  }

  isOffscreen() {
    return (
      this.x < -50 ||
      this.x > this.p.width + 50 ||
      this.y < -50 ||
      this.y > this.p.height + 50
    );
  }

  isDead() {
    return false; // Lines now reset instead of dying
  }

  display() {
    this.p.noFill();
    for (let i = 1; i < this.points.length; i++) {
      const alpha = this.p.map(i, 0, this.points.length, 255, 0);
      this.p.stroke(255, alpha);
      this.p.line(
        this.points[i - 1].x,
        this.points[i - 1].y,
        this.points[i].x,
        this.points[i].y,
      );
    }
  }
}
