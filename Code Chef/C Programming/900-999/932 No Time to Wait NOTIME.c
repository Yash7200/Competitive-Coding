#include <stdio.h>
int main(void)
{
	int x,h,n,sum;
	scanf("%d %d %d",&n,&h,&x);
	int a[n];
	for(int i=0;i<n;i++)
	{
	    scanf("%d",&a[i]);
	    sum=x+a[i];
	    if(sum>=h)
	    {
	        break;
	    }
	}
	if(sum>=h)
	{
	    printf("YES");
	}
	else
	{
	    printf("NO");
	}
	return 0;
}
