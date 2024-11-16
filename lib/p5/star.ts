import p5 from "p5";

export const settings = {
  strokeWeight: [0.5, 1, 2] as const,
  radius: [50, 600] as const,
  speed: [0.002, 0.01] as const,
  maxLength: 50,
  starCounts: 1200,
  size: { width: 400, height: 600 } as const,
  color: "#3b82f6" as const,
  background: "#070c10" as const,
} as const;

interface Trail {
  x: number;
  y: number;
  strokeWeight: number;
}

export class Star {
  private readonly p: p5;
  private readonly centerX: number;
  private readonly strokeWeight: number;
  private readonly radius: number;
  private rotationSpeed: number;
  private currentAngle: number = 0;
  private x: number = 0;
  private y: number = 0;
  private trail: Trail[] = [];

  constructor(p: p5, centerX: number) {
    this.p = p;
    this.centerX = centerX;
    this.strokeWeight = p.random([...settings.strokeWeight]);
    this.radius = p.random(settings.radius[0], settings.radius[1]);
    this.rotationSpeed = p.random(settings.speed[0], settings.speed[1]);
    this.reset();
  }

  reset(): void {
    this.currentAngle = this.p.random(this.p.TWO_PI);
    this.updatePosition();
  }

  private updatePosition(): void {
    this.x = this.centerX + this.radius * Math.cos(this.currentAngle);
    this.y = this.radius * Math.sin(this.currentAngle);
  }

  update(): void {
    this.currentAngle += this.rotationSpeed;
    this.updatePosition();

    this.trail.unshift({
      x: this.x,
      y: this.y,
      strokeWeight: this.strokeWeight,
    });

    if (this.trail.length > settings.maxLength) {
      this.trail.pop();
    }
  }

  draw(): void {
    for (let i = 0; i < this.trail.length; i++) {
      const point = this.trail[i];
      const alpha = this.p.map(i, 0, this.trail.length, 255, 0);
      const randomColor =
        Math.random() * 10 > 5 ? "59, 130, 246" : "255, 240, 250";
      this.p.stroke(`rgba(${randomColor}, ${alpha})`);
      this.p.strokeWeight(point.strokeWeight);
      this.p.point(point.x, point.y);
    }
  }
}
