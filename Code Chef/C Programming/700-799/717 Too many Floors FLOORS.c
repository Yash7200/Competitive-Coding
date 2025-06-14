#include <stdio.h>
int main()
{
    int t,x,y,c,c1;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d",&x,&y);
        if(x%10==0)
        {
            c=x/10;
        }
        else
        {
            c=(x/10)+1;
        }
        if(y%10==0)
        {
            c1=y/10;
        }
        else
        {
            c1=(y/10)+1;
        }
        if(c1>c)
        {
            printf("%d\n",c1-c);
        }
        else
        {
            printf("%d\n",c-c1);
        }
    }
    return 0;
}