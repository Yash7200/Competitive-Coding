#include <stdio.h>
int main() 
{
    int t,x,y,z,cnt;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d%d",&x,&y,&z);
        if(x<=y)
        {
            printf("%d\n",z);
        }
        else
        {
            cnt=0;
            while(x>0)
            {
                x=x-y;
                cnt++;
            }
            printf("%d\n",(cnt*z));
        }
    }
	return 0;
}