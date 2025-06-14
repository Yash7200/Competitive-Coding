#include <stdio.h>
int main() 
{
    int t,n,x,k;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d%d",&n,&x,&k);
        int cnt=0;
        for(int bottle=1;bottle<=n;bottle++)
        {
            if(k<x)
            {
                break;
            }
            k=k-x;
            cnt++;
        }
        printf("%d\n",cnt);
    }
	return 0;
}