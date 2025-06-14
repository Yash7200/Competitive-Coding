#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    int a[n],b[n];
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	    }
	    int cnt=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&b[j]);
	        if(a[j]>2*b[j] ||b[j]>2*a[j])
	        {
	            cnt++;
	        }
	    }
	    printf("%d\n",(n-cnt));
	}
	return 0;
}
