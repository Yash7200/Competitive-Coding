#include <stdio.h>
int main(void) {
	int t,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&a,&b);
	    if((a+b)>=21||(a+b)<11)
	    {
	        printf("-1\n");
	    }
	    else
	    {
	        printf("%d\n",(21-(a+b)));
	    }
	}
	return 0;
}
