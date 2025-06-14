#include <stdio.h>
int main() 
{
    int t,x,y;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d",&x,&y);
        int cnt=0;
        if(x==y)
        {
            printf("0\n");
        }
        else if(x>y)
        {
            while(x>y)
            {
                x=x-2;
                y--;
                cnt++;
            }
            printf("%d\n",cnt);
        }
        else
        {
            while(x<y)
            {
                x=x+2;
                y++;
                cnt++;
            }
            printf("%d\n",cnt);
        }
        
    }
	return 0;
}