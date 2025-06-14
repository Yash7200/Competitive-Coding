#include <stdio.h>
int main(void)
{
	int t,a,b,c;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&a,&b,&c);
	    int min=a;
	    if(b<min)
	    {
	        min=b;
	    }
	    if(c<min)
	    {
	        min=c;
	    }
	    printf("%d\n",(a+b+c-min));
	}
	return 0;
}