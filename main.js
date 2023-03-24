const person={
	first_name:'sathish',
	last_name:'kumar',
	phone:'6374465260',
	email:'svksathish41@gmail.com',
	address:{
		street:{
			street_num:'495',
			street_name:'sudalai madan street'
		},
		city:'s.v.karai',
		country:'india'
	}
};
for(cric in person)
{
	if(person[cric] instanceof Object==false)
	{
		console.log(`${cric}:${person[cric]}`);
	}
	else if(person[cric] instanceof Object)
	{
		for(cric2 in person[cric])
		{
			if(person[cric][cric2] instanceof Object==false)
			{
				console.log(`${cric2}:${person[cric][cric2]}`);
			}
			else{
				for(cric3 in person[cric][cric2])
				{
					console.log(`${cric3}:${person[cric][cric2][cric3]}`);
		}
	}
}
	}
}