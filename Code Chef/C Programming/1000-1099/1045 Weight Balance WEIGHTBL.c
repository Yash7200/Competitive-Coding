//Variables:
    //w1 --> weight before lockdown
    //w2 --> weight after lockdown
    //x1 --> min weight of healthy child
    //x2 --> max weight of healthy child
    //m --> months of lockdown
//Logic:
   //If weight difference of all months in range then we'll print 1 otherwise we'll print 0
#include <stdio.h>
int main(void)
{
	int t,w1,w2,m,x1,x2;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d %d",&w1,&w2,&x1,&x2,&m);
	    if(((w2-w1)>=(x1*m)) && ((w2-w1)<=(x2*m)))
	    {
	        printf("1\n");
	    }
	    else
	    {
	        printf("0\n");
	    }
	}
	return 0;
}