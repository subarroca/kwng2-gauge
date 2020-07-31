/**
 * @category   Model
 * @package    com.kiwity.gauge.gauge
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR




// EXTERNAL




// OWN





export class GaugeSegment {
  radius: number;
  goal: number;
  value: number;
  color: string;
  bgColor: string;
  borderWidth: number;


  constructor(options: {
    radius?: number,
    goal?: number,
    value?: number,
    color?: string,
    bgColor?: string,
    borderWidth?: number
  } = {}) {
    this.radius = options.radius || 100;
    this.goal = options.goal || 100;
    this.value = options.value;
    this.color = options.color;
    this.bgColor = options.bgColor || 'transparent';
    this.borderWidth = options.borderWidth || 100;
  }



  get computedRadius(): number {
    return this.radius - this.borderWidth / 2;
  }

  get strokeProgress(): string {
    return `${2 * Math.PI * this.computedRadius * this.value / this.goal} ${2 * Math.PI * this.computedRadius}`;
  }

  get strokeEmptyProgress(): string {
    return `0 ${2 * Math.PI * this.computedRadius}`;
  }
}
