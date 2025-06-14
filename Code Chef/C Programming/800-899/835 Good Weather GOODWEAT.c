#include <stdio.h>
int main(void)
{
	int t,d1,d2,d3,d4,d5,d6,d7;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	   scanf("%d %d %d %d %d %d %d",&d1,&d2,&d3,&d4,&d5,&d6,&d7);
	   int arr[7]={d1,d2,d3,d4,d5,d6,d7};
	   int cnt=0,cnt1=0;
	   for(int j=0;j<7;j++)
	   {
	       if(arr[j]==1)
	       {
	           cnt++;
	       }
	       else
	       {
	           cnt1++;
	       }
	   }
	   if(cnt>cnt1)
	   {
	       printf("YES\n");
	   }
	   else
	   {
	       printf("NO\n");
	   }
	}
	return 0;
}
