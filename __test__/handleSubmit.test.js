import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing submit functionality", () => {
    test ("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    });
});