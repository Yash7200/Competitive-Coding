#include <stdio.h>
int main(void)
{
	int t,size;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&size);
	    int arr[size];
	    for(int j=0;j<size;j++)
	    {
	        scanf("%d",&arr[j]);
	    }
	    int cnt=0;
	    for(int j=0;j<size;j++)
	    {
	        if((arr[j]>=10)&&(arr[j]<=60))
	        {
	            cnt++;
	        }
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}