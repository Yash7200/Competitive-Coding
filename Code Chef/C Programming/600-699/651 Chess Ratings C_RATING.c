#include <stdio.h>
int main()
{
    int t,x,y;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d",&x,&y);
        if(x>=y)
        {
            printf("0\n");
        }
        else
        {
            int cnt=0;
            while(x<y)
            {
                x=x+8;
                cnt++;
            }
            printf("%d\n",cnt);
        }
    }
	return 0;
}