#include <stdio.h>
int main(void)
{
	int t,num,num1;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    num1=0;
	    scanf("%d",&num);
	    int num2=num;
	    while(num>0)
	    {
	        int temp=num%10;
	        num1=(10*num1)+temp;
	        num=num/10;
	    }
	    if(num1==num2)
	    {
	        printf("wins\n");
	    }
	    else
	    {
	        printf("loses\n");
	    }
	}
	return 0;
}
