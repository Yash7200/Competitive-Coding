#include <stdio.h>
int main() 
{
    int t,n;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&n);
        int d[n];
        for(int j=0;j<n;j++)
        {
            scanf("%d",&d[j]);
        }
        int cnt=0;
        for(int j=0;j<n;j++)
        {
            if((d[j])>=1000)
            {
                cnt++;
            }
        }
        printf("%d\n",cnt);
    }
	return 0;
}