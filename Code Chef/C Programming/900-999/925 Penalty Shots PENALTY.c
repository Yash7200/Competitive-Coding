#include <stdio.h>
int main(void)
{
	int t,a,b,c,d,e,f,g,h,i1,j;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d %d %d %d %d %d %d",&a,&b,&c,&d,&e,&f,&g,&h,&i1,&j);
	    if((a+c+e+g+i1)==(b+d+f+h+j))
	    {
	        printf("0\n");
	    }
	    if((a+c+e+g+i1)>(b+d+f+h+j))
	    {
	        printf("1\n");
	    }
	    if((a+c+e+g+i1)<(b+d+f+h+j))
	    {
	        printf("2\n");
	    }
	}
	return 0;
}
