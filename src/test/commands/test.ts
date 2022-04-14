import { Command } from "../../main";

const test = new Command({
    arguments: [],
    callback: () => {
        console.log("test!")
    }
})

export default test