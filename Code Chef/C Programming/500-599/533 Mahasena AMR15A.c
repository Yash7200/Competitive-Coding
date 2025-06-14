#include <stdio.h>
int main() 
{
    int n,w,cnt1=0,cnt2=0;
    scanf("%d",&n);
    for(int i=0;i<n;i++)
    {
        scanf("%d",&w);
        if((w%2)==0)
        {
            cnt1++;
        }
        else
        {
            cnt2++;
        }
    }
    if(cnt1>cnt2)
    {
        printf("READY FOR BATTLE\n");
    }
    else
    {
        printf("NOT READY\n");
    }
	return 0;
}