//In certain month

//Chef    earned --> x
//Chefina earned --> y

//y>x

//end up with same amount by donating difference

#include <stdio.h>
int main(void)
{
	int t,x,y; //t--> test cases, x-->Chef's money, y--> Chefina's money
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&x,&y);
	    printf("%d\n",y-x);
	}
	return 0;
}