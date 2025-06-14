#include <stdio.h>
int main(void)
{
	int t,x,y,z;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&x,&y,&z);
	    if(y>=(10*x))
	    {
	        printf("%d\n",(10*x*z));
	    }
	    else
	    {
	        printf("%d\n",(y*z));
	    }
	}
	return 0;
}