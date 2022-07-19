import React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function sortUp(objs){
	console.log(objs)
	objs.sort((a,b) => (a.score >= b.score) ? 1 : ((b.score > a.score) ? -1 : 0));
	return objs;
}


function sortDown(objs){
	console.log(objs)
	objs.sort((a,b) => (a.score <= b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
	return objs;
}

export default function OperationBar({sortedUp,setSortedUp,...props}){
	function changeSort(){
		switch(sortedUp){
			case true:
				setSortedUp(false);props.setData(sortDown(props?.data));break;
			default:
				setSortedUp(true);props.setData(sortUp(props?.data));break;
		}

	}

	return (
		<center>
		<div style={{marginTop:'3rem'}}>
			
				<Button onClick={changeSort} variant={sortedUp==null ? "contained":"contained"}>Sort 
					{
						sortedUp!==null ? 
							sortedUp===true ? 
								<ArrowDropUpIcon fontSize="small"/>: 
								<ArrowDropDownIcon fontSize="small"/>
							:<div></div>
					}
				</Button>
			</div>
		</center>
	)
}