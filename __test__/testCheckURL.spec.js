import { checkForURL } from "../src/client/js/checkURL"
  
describe("Testing the URL functionality", () => {
  test("Testing the checkForURL() function", () => {
    expect(checkForURL("text")).toBeFalsy();
  })

  test("Testing the checkForURL() function", () => {
    expect(checkForURL("1233512")).toBeFalsy();
  })

  test("Testing the checkForURL() function", () => {
    expect(checkForURL("")).toBeFalsy();
  })

  test("Testing the checkForURL() function", () => {
    expect(checkForURL("https://www.google.com")).toBeTruthy();
  })
}); 