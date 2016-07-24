export class Plan {
  constructor(
    public totalPrice: number,
    public downpayment: number,
    public intervalType: string,
    public installmentsTimes: number
  ) {  }
}