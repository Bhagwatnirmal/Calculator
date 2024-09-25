package com.demo.Calculator;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class CalPro
{	
	@RequestMapping("addA{num1}and{num2}")
	public int add(@PathVariable int num1, @PathVariable int num2)
	{
		return num1 + num2;
	}
	
	@RequestMapping("subS{num1}and{num2}")
	public int sub(@PathVariable int num1, @PathVariable int num2)
	{
		return num1 - num2;
	}
	
	@RequestMapping("multM{num1}and{num2}")
	public int mul(@PathVariable int num1, @PathVariable int num2)
	{
		return num1 * num2;
	}
	
	@RequestMapping("divD{num1}and{num2}")
	public int div(@PathVariable int num1, @PathVariable int num2)
	{
		return num1 / num2;
	}
	
	@RequestMapping("modM{num1}and{num2}")
	public int mod(@PathVariable int num1, @PathVariable int num2)
	{
		return num1 % num2;
	}
}
