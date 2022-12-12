/**
 * domuen - A simple logger library for any JavaScript project
 */
 export default class Logger {
  private static formatString(seconds: number): string {
    if (`${seconds}`.length === 1) return `0${seconds}`;
    return `${seconds}`;
  }

  private static getPrefix(type: "VERBOSE" | "LOG" | "WARN" | "ERROR"): string {
    const date: Date = new Date();
    const time: string = `${this.formatString(date.getHours())}:${this.formatString(date.getMinutes())}:${this.formatString(date.getSeconds())}`;
    return `${time} | ${type} :`;
  }

  public static verbose(...logs: any[]): void {
    const prefix: string = this.getPrefix("VERBOSE");
    console.log(prefix, ...logs);
  }

  public static log(...logs: any[]): void {
    const prefix: string = this.getPrefix("LOG");
    console.log(prefix, ...logs);
  }

  public static warn(...logs: any[]): void {
    const prefix: string = this.getPrefix("WARN");
    console.warn(prefix, ...logs);
  }

  /**
   * Will print with extra spacing above and below
   */
  public static error(...logs: any[]): void {
    const prefix: string = this.getPrefix("ERROR");
    console.error("\n", prefix, ...logs, "\n");
  }
}
