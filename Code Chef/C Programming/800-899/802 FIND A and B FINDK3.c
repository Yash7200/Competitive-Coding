//b --> any of x,y,z
//a --> product of any two from x,y,z after selecting 'b'

//'a' is divisible by 'b' & 'b' must not be used in 'a'
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int x,y,z;
	    scanf("%d %d %d",&x,&y,&z);
	    if((x*y)%z==0)
	    {
	        printf("%d %d\n",x*y,z);
	    }
	    else if((x*z)%y==0)
	    {
	        printf("%d %d\n",x*z,y);
	    }
	    else if((z*y)%x==0)
	    {
	        printf("%d %d\n",z*y,x);
	    }
	    else
	    {
	        printf("-1\n");
	    }
	}
	return 0;
}