<?php include 'header.php' ?>
<!-- #content -->

<h2>App</h2>

<div id="form"></div>
<div id="list"></div>

<script id="formView" type="text/template">
	<h2>new user</h2>
	<p><input type="text" id="name" placeholder="Name"/></p>
	<p><input type="text" id="age" placeholder="Age"/></p>
	<p><button>Create</button></p>
</script>

<script id="userView" type="text/template">
	<p>Name: <%= name %></p>
	<p>Age: <%= age %></p>
</script>

<script id="usersView" type="text/template">
	<h2>Users:</h2>
</script>

<script id="noUsersView" type="text/template">
	<h2>No Users</h2>
</script>

<?php include 'footer.php' ?>