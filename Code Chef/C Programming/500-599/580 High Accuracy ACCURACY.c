#include <stdio.h>
int main() 
{
    int t,x,cnt;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&x);
        if((x%3)==0)
        {
            printf("0\n");
        }
        else
        {
            cnt=0;
            while((x%3)!=0)
            {
                x++;
                cnt++;
            }
            printf("%d\n",cnt);
        }
    }
	return 0;
}