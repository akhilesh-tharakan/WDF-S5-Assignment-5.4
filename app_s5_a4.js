/* This is the script file from where we are passing the value */	
/* Session 5 Assignment 2 */
	
	
	var employee =[
		
					{firstname: 'Bryan', lastname:'Smith', age: 28, salary: '12 Lakh per annum', 
					address:{City: 'Bangalore', State: 'Karnataka', Pincode: 680013}},
					
					{firstname: 'John', lastname:'James', age: 29, salary: '13 Lakh per annum', 
					address:{City: 'Delhi',State: 'Delhi',Pincode: 110013}},
					
					{firstname: 'Jim', lastname:'Isaac', age: 30, salary: '8 Lakh per annum', 
					address:{City: 'Delhi', State: 'Delhi', Pincode: 110074 }},
					
					{firstname: 'Arun', lastname:'Kumar', age: 18, salary: '2 Lakh per annum', 
					address:{City: 'Chennai',State: 'Tamil Nadu',Pincode: 680015}},
					
					{firstname: 'King', lastname:'Soloman', age: 48, salary: '52 Lakh per annum', 
					address:{City: 'Goa',State: 'Goa',Pincode: 450013}},
	];
	/* Object is been created here */
	
	console.log("Details are as below: ");
	console.log("First Name: " + employee[3].firstname);
	console.log("Last Name: " + employee[3].lastname);
	console.log("Age: " + employee[3].age);
	console.log("Salary: " + employee[3].salary);
	console.log("Address: ")
	console.log("City: " + employee[3].address.City);
	console.log("State: " + employee[3].address.State);
	console.log("Pincode: " + employee[3].address.Pincode);