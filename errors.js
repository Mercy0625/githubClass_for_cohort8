try {
     let result = 10 / 2;
 console.log(result);
 undefinedFunction();
 console.log("This line will not run");
} catch (error) {
    console.log("An error occured:" + error.message +error.name);
}
console.log("The program continues")

function loadUserData(userId) {
    console.log("Starting to load data");
    try {
        if (userId <= 0) {
            throw new Error("Invalid user ID");
        }
        console.log("Data loaded successfully" + userId);
    } catch (error) {
        console.log("failed:" + error.message);
    } finally {
        console.log("Finished loading data");
    }
}
loadUserData(5);
loadUserData(-1);

function registerStudent(name, age){
    try {
        if (!name){
            throw new Error("Name is required");
        }
        if (age < 16 || age > 60) {
            throw new Error("Age must be between 16 and 60. Got: " + age);
        }
        console.log("Student registered successfully: " + name + ", Age: " + age);
    } catch (error) {
        console.log("Failed to register student: " + error.message);
    }
}

registerStudent("John Doe", 25);
registerStudent("", 25);
registerStudent("Jane Smith", 15);
registerStudent("Alice Johnson", 65);