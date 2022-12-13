let userAndPass = [
	{
		"username": "janne",
		"userPassword": "test"
	},
	{
		"username": "ted",
		"userPassword": "industrialrevolution123"
	},
	{
		"username": "satoshi",
		"userPassword": "ciahoneypot"
	},
]

let hamArray = [
	{
		"elementTag": "button",
		"elementClassName": "header__hamburger",	
		"elementPurpose": "hamburgerBtn"
	},
	{
		"elementTag": "input",
		"elementClassName": "header__hamburger--toggle",
		"elementType": "checkbox",
		"elementPurpose": "checkBox"		
	},
	{
		"elementTag": "div",
		"elementClassName": "header__hamburger--dropdown",
		"elementPurpose": "loginDropDown"
	}
]

let loginPageArray = [
	{
		"elementTag": "h2",
		"elementClassName": "container__title",
		"elementText": "Wonderland User Login:"
	},
	{
		"elementTag": "form",
		"elementClassName": "container__form",
		"elementPurpose": "loginForm",
		"elementInputFields": [
			"<label id='userLabel' class='container__form--labels'>User Name </label><br><br>",
			"<input type='text' id='getUserName' class='container__form--inputs'></input><br><br>",
			"<label id='passLabel' class='container__form--labels'>Password </label><br><br>",
			"<input type='text' id='getPassword' class='container__form--inputs'></input><br><br>",
			"<button type='button' id='loginBtn' class='container__form--buttons'>Log In!</button>",
			"<button type='button' id='newUserBtn' class='container__form--buttons'>Add New User?</button>",
			"<button type='button' id='newUserAddBtn' class='container__form--buttonhidden'>Add New User!</button>",
			"<div id='loginError' class='container__form--errorhidden'>Error! wrong credentials!!!</div>",
			"<div id='newUserAddError' class='container__form--errorhidden'>Hey! U messed up! Input field(s) empty!</div>"
		]	
	}
]

let loggedInArray = [
	{
		"elementTag": "h2",
		"elementClassName": "container__title",
		"elementText": "Welcome, ",
		"elementPurpose": "greeting"
	},
	{
		"elementTag": "h3",
		"elementClassName": "container__subtitle",
		"elementText": "Read our Manifesto!"
	},
	{
		"elementTag": "p",
		"elementClassName": "container__text",
		"elementText": "The Industrial Revolution and its consequences have been a disaster for the human race. They have greatly increased the life-expectancy of those of us who live in “advanced” countries, but they have destabilized society, have made life unfulfilling, have subjected human beings to indignities, have led to widespread psychological suffering (in the Third World to physical suffering as well) and have inflicted severe damage on the natural world. The continued development of technology will worsen the situation. It will certainly subject human beings to greater indignities and inflict greater damage on the natural world, it will probably lead to greater social disruption and psychological suffering, and it may lead to increased physical suffering even in “advanced” countries. "
	}
]

let headerContainer = document.getElementById("headerContainer");

let contentContainer = document.getElementById("contentContainer");

if (localStorage.getItem("usersString") === null) {
	let userStringified = JSON.stringify(userAndPass);
	localStorage.setItem("usersString", userStringified);
}

let userArray = JSON.parse(localStorage.getItem("usersString"));

function domManipulation(elementArray, container) {
	for (i in elementArray) {
		let element = document.createElement(elementArray[i].elementTag);
		element.className = elementArray[i].elementClassName;
			switch(elementArray[i].elementPurpose) {
			case "hamburgerBtn":
				for(var j = 0; j < 3; j++) {
					element.innerHTML += "<span class='lines'></span>";
				}
				break;
			case "checkBox":
				element.type = elementArray[i].elementType;
				break;
			case "loginDropDown":
				if (localStorage.getItem("loginState") === null) {
					element.innerHTML = "Log in!";
					element.id = "toLogin";
				} else if (localStorage.getItem("loginState") === "isLoggedIn") {
					element.innerHTML = "Log out!";
					element.id = "toLogout";
				}
				break;
			case "loginForm":
				for (fields in elementArray[i].elementInputFields) {
					element.innerHTML += elementArray[i].elementInputFields[fields];
				}
				break;
			case "greeting":
				element.innerHTML = elementArray[i].elementText + localStorage.getItem("loggedInUser");
				break;
			default:
				element.innerHTML = elementArray[i].elementText;	
		}
		container.append(element);
	}
}

function loggedIn() {
	contentContainer.innerHTML = "";
	headerContainer.innerHTML = "";
	domManipulation(hamArray, headerContainer);
	domManipulation(loggedInArray, contentContainer);
	contentContainer.className = "content";
	const toLogout = document.getElementById("toLogout");
	toLogout.addEventListener("click", () => {
		localStorage.removeItem("loggedInUser");
		localStorage.removeItem("loginState");
		reloadLogInStatus(localStorage.getItem("loginState"));
		contentContainer.className = "";
	})
}

function loggedOut() {
	contentContainer.innerHTML = "";
	headerContainer.innerHTML = "";
	domManipulation(hamArray, headerContainer);
	let toLogin = document.getElementById("toLogin");
	toLogin.addEventListener("click", () => {	
		contentContainer.innerHTML = "";
		domManipulation(loginPageArray, contentContainer);
		contentContainer.className = "content";
		const loginBtn = document.getElementById("loginBtn");
		let getUserName = document.getElementById("getUserName");
		loginBtn.addEventListener("click", () => {
			let getPassword = document.getElementById("getPassword");
			let findUser = userArray.find(findUser => findUser.username === getUserName.value)
			if (findUser && findUser.userPassword === getPassword.value) {
				localStorage.setItem("loginState", "isLoggedIn");
				localStorage.setItem("loggedInUser", findUser.username);
				reloadLogInStatus(localStorage.getItem("loginState"));
			} else {
				let loginError = document.getElementById("loginError");
				loginError.className = "container__form--error";
			}
		})
		let newUserBtn = document.getElementById("newUserBtn");
		newUserBtn.addEventListener("click", () => {
			let newUserAddBtn = document.getElementById("newUserAddBtn");
			document.getElementsByClassName("container__title")[0].innerHTML = "Add new user";
			document.getElementById("userLabel").innerHTML = "New User Name: ";
			document.getElementById("passLabel").innerHTML = "New Password: ";
			newUserAddBtn.className = "container__form--buttons";
			newUserBtn.remove();
			loginBtn.remove();
			getUserName.id = "newUserName";
			getPassword.id = "newUserPassword";
			newUserName = document.getElementById("newUserName");
			newUserPassword = document.getElementById("newUserPassword");
			newUserAddBtn.addEventListener("click", () => {
				if (!newUserName.value || !newUserPassword.value) {
					let newUserAddError = document.getElementById("newUserAddError");
					newUserAddError.className = "container__form--error";
				} else {
					userArray.push({"username": newUserName.value,"userPassword": newUserPassword.value})
					localStorage.removeItem("usersString");
					let newUsersStringified = JSON.stringify(userArray);
					localStorage.setItem("usersString", newUsersStringified);
					reloadLogInStatus(localStorage.getItem("loginState"));
					contentContainer.className = ""
				}
			})
		})
	})
}

function reloadLogInStatus(loggInToken) {
	if (loggInToken === null) {
		loggedOut();
	} else if (loggInToken === "isLoggedIn") {
		loggedIn();
	}
}

window.onload = reloadLogInStatus(localStorage.getItem("loginState"));