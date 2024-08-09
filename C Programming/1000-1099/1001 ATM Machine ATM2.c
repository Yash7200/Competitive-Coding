//k --> amount in ATM
//n --> no. of people/size of array
//if ATM has required amount of money then print 1 for each such people
//otherwise print 0 for such people
//Problem Simplification:
    //ATM has 'k' amount of money
    //n --> no. of people coming to withdraw money

//Logic:
    //Access array elements in a for loop.
    //If someone wants withdraw more than available money then print 0
    //otherwise print 1
    //print new line character '\n' outside of for loop.
    //Note:storing new character according to operation into another char array won't give correct answer. I created array on line no. 15 to do such but I got wrong answer.

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,k;
	    scanf("%d %d",&n,&k);
	    int a[n];
	    char o[n];
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	        if(a[j]>k || k==0)
	        {
	            printf("0");
	        }
	        else
	        {
	            k=k-a[j];
	            printf("1");
	        }
	    }
	    printf("\n");
	}
	return 0;
}