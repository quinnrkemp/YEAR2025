  // CHALLENGE NAME-  Commenting Made Easy: A Beginner's Task   (7kyu)

    // DESCRIPTION:

    // Task Description
    // Your task is to create a function that takes two parameters:
    
    // text: A string containing the text to be wrapped in comments.
    // style: A string indicating the style of comments to use. It can be one of the following:
    // "Bash"
    // "Bash Multiline"
    // "JavaDoc"
    // "Python"
    // "Python Multiline"
    // "Javascript"
    // "Javascript Multiline"
    // "SGML"
    // "SQL"
    // The function should wrap the given text in the appropriate comment 
    // style and return the result.
    
    // Examples
    // Input:
    
    // text = "Hello World!"
    // style = "Bash"
    // Output:
    
    // # Hello World!
    // Input:
    
    // text = "Hello World!"
    // style = "JavaDoc"
    // Output:
    
    // /**
    //  * Hello World!
    //  */
    // Input:
    
    // text = "Hello\nWorld!"
    // style = "SGML"
    // Output:
    
    // <!-- Hello -->
    // <!-- World! -->
    // Testing
    // You can test your function using a set of predefined test cases that 
    // cover both single-line and multi-line inputs for each comment style.

    // // ***STARTER CODE***

    // function comment(text, style) {
     
    //   }   

    // //   ******TEST CASES*****
    
    // const { assert } = require("chai");

    // describe("Playground", function() {
    
    //   function act(text, style, expected) {
    //     const actual = comment(text, style)
    //         , msg = `style: ${style}\n\n'${text}'\n\n`;
    //     assert.strictEqual(actual, expected, msg);
    //   }
      
    //   const sampleTestCases = [
    //     // singleline text
    //     ["Hello World!", "Bash", "# Hello World!"],
    //     ["Hello World!", "Bash Multiline", ': "\nHello World!\n"'],
    //     ["Hello World!", "JavaDoc", "/**\n* Hello World!\n*/"],
    //     ["Hello World!", "Python", "# Hello World!"],
    //     ["Hello World!", "Python Multiline", '"""\nHello World!\n"""'],
    //     ["Hello World!", "Javascript", "// Hello World!"],
    //     ["Hello World!", "Javascript Multiline", "/*\nHello World!\n*/"],
    //     ["Hello World!", "SGML", "<!-- Hello World! -->"],
    //     ["Hello World!", "SQL", "-- Hello World!"],
    //     // multiline text
    //     ["Hello\nWorld!", "Bash", "# Hello\n# World!"],
    //     ["Hello\nWorld!", "Bash Multiline", ': "\nHello\nWorld!\n"'],
    //     ["Hello\nWorld!", "JavaDoc", "/**\n* Hello\n* World!\n*/"],
    //     ["Hello\nWorld!", "Python", "# Hello\n# World!"],
    //     ["Hello\nWorld!", "Python Multiline", '"""\nHello\nWorld!\n"""'],
    //     ["Hello\nWorld!", "Javascript", "// Hello\n// World!"],
    //     ["Hello\nWorld!", "Javascript Multiline", "/*\nHello\nWorld!\n*/"],
    //     ["Hello\nWorld!", "SGML", "<!-- Hello -->\n<!-- World! -->"],
    //     ["Hello\nWorld!", "SQL", "-- Hello\n-- World!"],
    //   ];
      
    //   describe("Sample tests", function() {
    //     for (let [text, style, expected] of sampleTestCases) {
    //       it(`style: ${style}, text: '${text}'`, function() {
    //         act(text, style, expected);
    //       });
    //     }
    //   });
    // });
    

    // ******MY ANSWER********

const fns = {
    "Bash": (a) => a.map((s) => `# ${s}`).join("\n"),
    "Bash Multiline": (a) => `: "\n${a.join("\n")}\n"`,
    "JavaDoc": (a) => `/**\n${a.map((s) => `* ${s}`).join("\n")}\n*/`,
    "Python": (a) => fns.Bash(a),
    "Python Multiline": (a) => `"""\n${a.join("\n")}\n"""`,
    "Javascript": (a) => a.map((s) => `// ${s}`).join("\n"),
    "Javascript Multiline": (a) => `/*\n${a.join("\n")}\n*/`,
    "SGML": (a) => a.map((s) => `<!-- ${s} -->`).join("\n"),
    "SQL": (a) => a.map((s) => `-- ${s}`).join("\n"),
  };
  
  const comment = (text, style) => fns[style](text.split("\n"));

  // ***answered from the solutions***