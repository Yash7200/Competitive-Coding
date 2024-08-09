//Problem Simplification:
    //x --> cost of insurance
    //on each sell chef gets the commission of 20%
    //find no. of insurance chef needs to sell for earning *minimum* 100 dollars

//Logic:
    //We'll create a float variable to store insurance amount & later we'll replace it with 20% commission.
    //We'll run a for loop with no terminating condition to find no. of insurances chef needs to sell.
    //if multiplication of commission & no. of sold insurances becomes more or equal to "100.000000" it will break the loop & we'll get the answer.
    //(Note:2nd condition in for loop is optional which is converting the loop to infinite loop)
    //If we create another variable & start adding commission untill 100 or more than 100 are received then it will give us inaccurate results. The same is applicable if we are subtracting commission from 100.
#include <stdio.h>
int main(void)
{
	int t;
 	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int cnt=0,j;
	    float x;
	    scanf("%f",&x);
	    x=x*0.20;
	    for(j=1;;j++)
	    {
	        if(j*x>=100.000000)
	        {
	            break;
	        }
	    }
	    printf("%d\n",j);
	}
	return 0;
}