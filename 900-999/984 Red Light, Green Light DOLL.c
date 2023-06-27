//k --> height of Ali & Gi-Hun
//n --> no. of players before Ali
//h --> <i>th player with specific height, need to get shot so Ali is visible

//Note:
//==> Ali will be visible even if someone has same height 'k'.


//cnt --> counting of people having height greater than 'k'
#include <stdio.h>
int main(void)
{
    int t;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        int n,k,cnt=0;
        scanf("%d %d",&n,&k);
        int h[n];
        for(int j=0;j<n;j++)
        {
            scanf("%d",&h[j]);
            if(h[j]>k)
            {
                cnt++;
            }
        }
        printf("%d\n",cnt);
    }
	return 0;
}