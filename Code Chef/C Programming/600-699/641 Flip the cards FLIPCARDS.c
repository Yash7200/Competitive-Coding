#include <stdio.h>
int main() 
{
    int t,n,x;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d",&n,&x);
        if((n==x)||(x==0))
        {
            printf("0\n");
        }
        else
        {
            int up=x,down=n-x,cnt=0;
            if(up>down)
            {
                while(up>down)
                {
                    down--;
                    up++;
                    cnt++;
                    if(down==0)
                    {
                        break;
                    }
                }
                printf("%d\n",cnt);
            }
            else if(down>up)
            {
                while(down>up)
                {
                    up--;
                    down++;
                    cnt++;
                    if(up==0)
                    {
                        break;
                    }
                }
                printf("%d\n",cnt);
            }
            else
            {
                printf("%d\n",up);
            }
        }
    }
	return 0;
}