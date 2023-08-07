<template>
      <div class="container">
        <h3>Let's work together.</h3>
        <form action="#" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required>
            </textarea>
            
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default{ }
</script>

<style scoped>
.container {
    max-width: 600px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
    margin-top: 100px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    font-weight: bold;
    margin-bottom: 15px;
    text-align: left;
}

input,
textarea {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

textarea {
    resize: vertical;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>